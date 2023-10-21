import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();

    async function handleSignOut() {
        const res = await fetch("/api/logout", {method: "post"});

        if (res.ok) {
            router.push("/signin");
        }
    }

    return (
        <button 
            onClick={handleSignOut}
            className="text-green-400 underline p-2 rounded-lg my-5"
        >
            Sign Out
        </button>
    );
}