import Image from 'next/image';
import useSWR from 'swr';

export default function AvatarForm() {
  const { data, error, isLoading } = useSWR("/api/users/profile");

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  const user = data.data;

  return (
    <form>
      {user.avatar && (
        <Image 
          src="/dev.png"
          alt={user.avatar}
          width={200}
          height={200}
          className='rounded-full m-auto my-5 '
        />
      )}
      {!user.avatar && (
        <div
          className='bg-slate-600 rounded-full m-auto my-5'
          style={{width: 200, height: 200}}
        ></div>
      )}
      <input type='file' />
    </form>
  );
}
