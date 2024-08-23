"use client"

export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string };
    reset: () => void;
  }) {
    return (
    <div className="">

        <p>{error.message}</p>
        <button onClick={reset} className="btn btn-accent btn-outline mt-4">Rest me</button>
    </div>
    )
    
};