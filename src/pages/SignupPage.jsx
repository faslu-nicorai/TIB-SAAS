import React from 'react';
import TransformationPanel from '../components/ui/LoginUi/TransformationPanel';

const SignupPage = () => {
    return (
        <div className="flex min-h-screen w-full bg-white font-sans">
            {/* LEFT SIDE - Signup Form */}
            <div className="flex w-full flex-col justify-center px-8 py-12 md:px-12 lg:w-1/2 lg:px-24 xl:px-32">
            

                <div className="mx-auto w-full max-w-md">
                    {/* Logo */}
                    <div className="mb-10 flex justify-center">
                        <h1 className='font-extrabold text-6xl'>Certive</h1>
                    </div>

                    <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
                        Create an account
                    </h2>

                    {/* Signup Form */}
                    <form className="space-y-4">
                        <div className="space-y-4">
                            {/* Name Input (New) */}
                            {/* <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                            /> */}

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                            />

                            {/* Password Input */}
                            <input
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                            />
                        </div>

                        <button className="w-full rounded-full bg-black px-4 py-4 font-bold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                            Sign up
                        </button>
                    </form>

                    {/* Login Redirect */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="font-semibold text-black hover:underline">
                            Log in
                        </a>
                    </div>

                    {/* Footer Terms */}
                    <p className="mt-8 text-center text-xs leading-relaxed text-gray-400">
                        By creating an account, you agree to Certive's{' '}
                        <a href="#" className="underline hover:text-gray-600">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - Image/Collage */}
            {/* Kept consistent with Login page for branding continuity */}
            <div className="hidden h-screen w-1/2 bg-gray-50 lg:block">
                <TransformationPanel />
            </div>
        </div>
    );
};

export default SignupPage;