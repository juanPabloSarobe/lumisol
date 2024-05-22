import "animate.css";

const underConstruction = () => {
  return (
    <div
      id="container"
      className=" mt-5 lg:mt-0 ml-2 mr-2 md:w-vw md:h-vh bg-white dark:bg-slate-700 flex  items-center justify-center "
    >
      <div className="lg:w-2/4 lg:h-2/5 flex flex-col justify-center items-center ">
        <div className=" self-end bg-red-400 absolute  top-20 center-10 animate__animated animate__swing animate__slow ">
          <img
            src="..\..\src\assets\underConstruction.png "
            alt="Conection image"
            className="w-20 bg-red-400 "
          />
        </div>
        <div className=" mb-5 flex flex-row justify-center items-center bg-white rounded-lg">
          <img
            src="..\..\src\assets\Logo_lumisol.png "
            alt="Conection image"
            className="w-10  rounded-lg"
          />
          <img
            src="..\..\src\assets\Nombre_lumisol.png "
            alt="Conection image"
            className="h-10  rounded-lg"
          />
        </div>
        <img
          src="..\..\src\assets\connect.webp "
          alt="Conection image"
          className="w-3/5 rounded-lg"
        />
        <h2 className="text-2xl mt-3 text-center dark:text-slate-200 text-slate-800 ">
          En breve te conectaremos con un alternativa sustentable, asequible y
          limpia de energia.!!!!
        </h2>
      </div>
    </div>
  );
};

export default underConstruction;
