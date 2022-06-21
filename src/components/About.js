import logo from '../logo.svg';

function About() {
  return(
    <div className='text-center m-auto pb-8 w-96'>
      <div className='w-full'>
        <div className='flex'>
          <div className='w-1/4 drop-shadow-xl'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='w-3/4 text-center text-white mx-4 my-auto'>
            <h1 className='text-3xl'>Simple To-Do List</h1>
            <p>v0.1.0</p>
          </div>
        </div>
        <div className='flex'>
          <div className='w-full text-center bg-slate-200 my-2 py2
          rounded-full drop-shadow-xl'>
            <h1 className="text-xl">An Individual Project for FGAxProgate</h1>
            <p>&copy;2022 - Putra Nanda S</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;