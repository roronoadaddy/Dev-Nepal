import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('full_name, role, avatar_url')
    .eq('id', user.id)
    .single();

  if (error || !profile) {
    redirect('/profile/setup');
  }

  let developerProfile = null;
  let recruiterProfile = null;

  if (profile.role === 'dev') {
    const { data: devProfile, error: developerError } = await supabase
      .from('developer_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (developerError) {
      redirect('/profile/setup');
    }

    developerProfile = devProfile;
  } else {
    const { data: recProfile, error: recruiterError } = await supabase
      .from('recruiter_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (recruiterError) {
      redirect('/profile/setup');
    }

    recruiterProfile = recProfile;
  }

  return (
    <div>
      <h1>Welcome, {profile.full_name}</h1>
      <p>Role: {profile.role}</p>

      {profile.role === 'dev' ? (
        <div>
          <h2>Developer Dashboard</h2>
          <p>devName: {developerProfile?.dev_name}</p>
        </div>
      ) : (
        <div>
          <h2>Recruiter Dashboard</h2>
          <p>Company: {recruiterProfile?.company_name}</p>
        </div>
      )}
    </div>
  );
}