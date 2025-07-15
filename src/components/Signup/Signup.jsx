import React from 'react';

const Signup = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate async signup (you'd replace this with real API call)
    setTimeout(() => {
      const success = false; // Simulate failure for demo
      setLoading(false);
      if (!success) {
        setError('Signup failed. Please check your details and try again.');
      }
    }, 2000);
  };

  return (
    <div className='bg-purple-950 p-5 mt-5 w-[50%] mx-auto rounded-lg shadow-lg'>
      <h1 className='font-bold text-white text-2xl text-center'>Sign Up</h1>

      {/* Error message */}
      {error && (
        <div className='bg-red-500 text-white font-semibold p-3 mt-4 text-center rounded-md'>
          {error}
        </div>
      )}

      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='flex flex-col mt-4'>
          <label className='font-bold text-white text-center'>Your Email</label>
          <input
            type='email'
            placeholder='test@gmail.com'
            className='bg-purple-100 p-3 text-black rounded-md'
            required
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='font-bold text-white text-center'>Your Password</label>
          <input
            type='password'
            placeholder='123'
            className='bg-purple-100 p-3 text-black rounded-md'
            required
          />
        </div>

        <div className='mt-4 w-[15%] mx-auto'>
          {loading ? (
            // Spinner
            <div className='flex justify-center'>
              <div className='w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
            </div>
          ) : (
            <button
              type='submit'
              className='bg-white text-black p-3 font-bold text-purple-950 border rounded-lg w-full hover:bg-gray-200'
            >
              Sign Up
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
