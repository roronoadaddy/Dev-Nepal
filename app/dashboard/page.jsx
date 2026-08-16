'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/utils/supabase/client';
import { logout } from './logout';
import SetUpPfp from './setUpPfp';

function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [needsPfp, setNeedsPfp] = useState(false);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const { data: { user } } = await supabase.auth.getUser();

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    if (error) {
      console.error('Error checking profile:', error);
    }

    if (!profile) {
      router.push('/profile/setup');
      return;
    }


    setNeedsPfp(!profile.avatar_url);

    if (profile.role === 'dev') {
      const { data: devProfile, error: devError } = await supabase
        .from('developer_profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (devError){ console.error('Error fetching developer profile:', devError);}
      setDisplayName(devProfile?.dev_name);
    } else {
      const { data: recruiterProfile, error: recruiterError } = await supabase
        .from('recruiter_profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (recruiterError) { console.error('Error fetching recruiter profile:', recruiterError); }
      setDisplayName(recruiterProfile?.company_name);
    }

    setLoading(false);
    console.log(profile.avatar_url);
    setAvatarUrl(profile.avatar_url || '');
    
  }

  if (loading) return <p>Loading...</p>;


  return (
    <div className="relative min-h-screen bg-[#FAFAF7] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-4xl border border-[#1A1A1A]/10 bg-white/95 shadow-xl shadow-[#1E88E5]/10">
          <div className="flex flex-col items-center justify-between gap-6 bg-linear-to-br from-[#1E88E5]/10 via-white to-[#F5A623]/10 p-6 sm:flex-row sm:p-8 lg:p-10">
            <div className="flex items-center gap-4">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${displayName}'s profile picture`}
                  className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-md sm:h-20 sm:w-20"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#1E88E5]/10 text-xl font-semibold text-[#1E88E5] shadow-md sm:h-20 sm:w-20 sm:text-2xl">
                  {displayName?.[0]?.toUpperCase() ?? "?"}
                </div>
              )}

              <div>
                <span className="inline-flex rounded-full border border-[#1E88E5]/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#1E88E5]">
                  Dashboard
                </span>
                <h1 className="mt-2 text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
                  Welcome back, {displayName}!
                </h1>
              </div>
            </div>

            <button
              onClick={logout}
              type="button"
              className="cursor-pointer rounded-xl border border-[#1A1A1A]/15 bg-white px-5 py-3 text-sm font-medium text-[#1A1A1A]/80 transition-all duration-200 hover:border-[#1A1A1A]/25 hover:bg-[#1A1A1A]/3"
            >
              Logout
            </button>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            {/* rest of your dashboard content goes here */}
          </div>
        </div>
      </div>

      {needsPfp && <SetUpPfp onComplete={loadDashboard} />}
    </div>
  );
}

export default Dashboard;