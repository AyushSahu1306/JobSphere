import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            tenetur enim inventore recusandae corrupti maxime, repellendus
            placeat ipsum a reiciendis! Nemo voluptatum quisquam quasi
            doloremque quaerat cumque a exercitationem commodi. Doloremque ea
            delectus odio voluptas inventore mollitia nobis, blanditiis maiores,
            cupiditate obcaecati, veritatis doloribus quod dolore tenetur?
            Quaerat amet, dolorum aspernatur veniam perferendis officiis, ut
            voluptate rem dolores exercitationem molestiae. Veniam,
            consequuntur! Illum aliquam voluptas, voluptatum atque minima, optio
            repellendus quae at impedit vitae doloribus et ipsum fugiat vero
            amet esse doloremque delectus, quos omnis officiis deleniti facilis.
            Provident, laborum.
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eos
          veritatis perferendis dicta velit eaque nam voluptatibus quidem ab
          labore porro. At omnis tenetur earum esse cumque? Assumenda,
          voluptatum sequi. Deserunt provident dolorem voluptas, officiis sit
          architecto aperiam cupiditate consectetur? Earum, natus debitis ipsam
          omnis voluptatem minus temporibus iste id vero nisi quis beatae nemo
          cupiditate architecto magnam. Maxime, in? At quia blanditiis illo
          impedit, ex modi provident fugiat mollitia soluta? Aliquam amet
          dolorum magni ad. At hic minima eligendi dignissimos vel natus eaque
          iste ipsa ad libero! Illo, rem?
        </p>
      </div>
    </div>
  );
};

export default About;
