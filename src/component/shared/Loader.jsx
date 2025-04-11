
const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
        <div className="w-16 h-16 border-8 border-t-blue-500 rounded-full animate-spin"></div>
        <div >

        <h1 className="font-bold text-2xl">loading...</h1>
        </div>
      </div>
    );
};

export default Loader;