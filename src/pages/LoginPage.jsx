import React, { useState } from 'react';
import TransformationPanel from '../components/ui/LoginUi/TransformationPanel';
import { signIn } from "supertokens-auth-react/recipe/emailpassword";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await signIn({
                formFields: [
                    { id: "email", value: email },
                    { id: "password", value: password }
                ]
            });

            if (response.status === "OK") {
                // Login successful
                navigate("/"); // Redirect to dashboard/home
            } else {
                // Login failed (e.g. wrong credentials)
                // status can be "WRONG_CREDENTIALS_ERROR" or "FIELD_ERROR"
                setError("Invalid email or password");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-white font-sans">
            {/* LEFT SIDE - Login Form */}
            <div className="flex w-full flex-col justify-center px-8 py-12 md:px-12 lg:w-1/2 lg:px-24 xl:px-32 relative">
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-8 left-8 p-2 rounded-full hover:bg-gray-100 transition-colors group"
                    aria-label="Back to home"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors" />
                </button>

                <div className="mx-auto w-full max-w-md">
                    {/* Logo - Abstract M shape reconstruction */}
                    <div className="mb-10 flex justify-center">
                        <h1 className='font-extrabold text-6xl'>Certive</h1>
                    </div>

                    <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
                        Welcome back
                    </h2>

                    {/* Email Form */}
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center">{error}</div>
                        )}

                        <button
                            disabled={isLoading}
                            className="w-full rounded-full bg-black px-4 py-4 font-bold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="font-semibold text-black hover:underline">
                            Sign up
                        </a>
                    </div>

                    {/* Footer Terms */}
                    <p className="mt-8 text-center text-xs leading-relaxed text-gray-400">
                        By continuing, you agree to Certive's{' '}
                        <a href="#" className="underline hover:text-gray-600">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - Image/Collage */}
            <div className="hidden h-screen w-1/2 bg-gray-50 lg:block">
                {/* Note: Replace the src below with the actual collage image you possess.
           I am using a placeholder that mimics the "app design collage" look.
        */}
                <TransformationPanel />
            </div>
        </div>
    );
};

export default LoginPage;