"use client";
import { useState } from 'react';
import Logo from '@/components/logo';
import supabase from '@/utils/supabase/client';



export default function SetUpPfp({ onComplete }) {
  const [selectedFile, setSelectedFile] = useState(null); // now storing the File object, not just its name
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedExtensions = ['jpeg', 'jpg', 'png', 'webp'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const isAccepted = allowedExtensions.includes(fileExtension) || ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);

    if (!isAccepted) {
      setError('Please upload a valid image in .jpeg, .png, or .webp format.');
      setSelectedFile(null);
      setFileName('');
      event.target.value = '';
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setError('');
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please choose an image first.');
      return;
    }

    setUploading(true);
    setError('');

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError('Something went wrong — please log in again.');
      setUploading(false);
      return;
    }

    // build the path: {user_id}/avatar.{ext} — matches your Storage RLS policy
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const filePath = `${user.id}/avatar.${fileExtension}`;

    const { data: { session } } = await supabase.auth.getSession();
    console.log('DEBUG session user:', session?.user?.id, 'token exists:', !!session?.access_token, 'filePath:', filePath);

    const payload = JSON.parse(atob(session.access_token.split('.')[1]));
console.log('JWT role:', payload.role, 'JWT sub:', payload.sub);

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, selectedFile, {
        upsert: true, // overwrite if they upload again later
      });

    if (uploadError) {
      console.error('Error uploading avatar:', uploadError);
      setError('Upload failed. Please try again.');
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData.publicUrl;

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ avatar_url: publicUrl })
      .eq('id', user.id);

    if (updateError) {
      console.error('Error saving avatar_url:', updateError);
      setError('Upload succeeded but saving failed. Please try again.');
      setUploading(false);
      return;
    }

    setUploading(false);
    onComplete?.()
  };

  return (
    <div className="flex absolute top-0 left-0 min-w-screen min-h-screen items-center justify-center bg-linear-to-br from-[#3FA34D33] via-[#F5A62333] to-[#1E88E533] p-5 box-border">
      <div className="w-full max-w-110 rounded-[20px] border border-[#1A1A1A1a] bg-white p-7 text-center shadow-[0_20px_50px_rgba(26,26,26,0.12)]">
        <Logo className="h-16 mx-auto" />

        <h2 className="mb-2.5 text-[28px] font-bold text-[#1A1A1A]">
          Upload your profile picture
        </h2>

        <p className="mb-6 text-[15px] leading-6 text-[#1A1A1A99]">
          Add a profile photo to personalize your Dev Nepal profile.
        </p>

        {error && (
          <p className="mb-4.5 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-[13px] text-red-600">
            {error}
          </p>
        )}

        <label
          htmlFor="profile-upload"
          className="mb-4.5 inline-block cursor-pointer rounded-xl bg-[#1E88E5] px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#1a76c9]"
        >
          Choose Image
        </label>

        <input
          id="profile-upload"
          type="file"
          accept=".jpeg,.jpg,.png,.webp"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="mb-5 min-h-6 text-sm text-[#1A1A1A]">
          {fileName ? `Selected: ${fileName}` : 'No file selected'}
        </div>

        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading}
          className="w-full rounded-xl bg-[#3FA34D] px-4 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#358f42] focus:outline-none focus:ring-2 focus:ring-[#F5A623] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading...' : 'Save Profile Picture'}
        </button>
      </div>
    </div>
  );
}