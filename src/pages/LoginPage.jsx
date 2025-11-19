import React from 'react';
import productAnalitics from '../assets/productAnalitics.png';
import TransformationPanel from '../components/ui/LoginUi/TransformationPanel';

const LoginPage = () => {
    return (
        <div className="flex min-h-screen w-full bg-white font-sans">
            {/* LEFT SIDE - Login Form */}
            <div className="flex w-full flex-col justify-center px-8 py-12 md:px-12 lg:w-1/2 lg:px-24 xl:px-32">

                <div className="mx-auto w-full max-w-md">
                    {/* Logo - Abstract M shape reconstruction */}
                    <div className="mb-10 flex justify-center">
                        <h1 className='font-extrabold text-6xl'>Certive</h1>
                    </div>

                    <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
                        Welcome back
                    </h2>

                    {/* Email Form */}
                    <form className="space-y-4">
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                            />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                            />
                        </div>

                        <button className="w-full rounded-full bg-black px-4 py-4 font-bold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                            Login
                        </button>
                    </form>

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