import { Banner } from "../components/Banner";
import test from "../assets/logo/test.png";
import { Button } from "flowbite-react";

export default function HomeComponent() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-900">
        <div className="relative">
          <div className="flex">
            <img
              alt="photos by you"
              className="sm:max-w-auto sm:max-h-auto min-w-screen overflow-hidden! overflow-y-auto! bg-cover font-extralight"
              src={test}
            />
            <div className="absolute pt-[500px] pl-40 text-2xl text-gray-50">
              <h3 className="text-md">design with Impact</h3>
              <p className="font-bold italic">
                Enhancing Stays, Brands, and Performance
              </p>
              <Button className="mt-5 ml-80 flex items-center bg-purple-400">
                Voir plus
              </Button>
            </div>
            
          </div>

          <div className="absolute top-[600px] left-[32%] z-10 h-[300px] w-[90%] max-w-3xl rounded-md bg-white p-6 text-center shadow-lg">
            <p>Look at me dude !</p>
          </div>
          <div className="h-[300px] blur-3xl  bg-amber-50 "></div>
          <div className="flex justify-center flex-row gap-4 ">
            <div className="ml-3 w-[500px] pl-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                necessitatibus quae magnam dolore ut commodi tempora aliquam
                iure hic illum nesciunt ducimus repudiandae laudantium vel sunt
                nam voluptatum deleniti, dignissimos officiis reiciendis
                architecto eligendi explicabo dolorum rerum! Magni illum
                assumenda, cum sit eos debitis obcaecati reprehenderit quod quam
                veritatis repellendus laborum. Tempore, voluptas quos.
                Voluptatem obcaecati fuga vitae ea enim quia aspernatur,
                officiis temporibus alias, nam ut ad beatae libero inventore.
                Accusamus incidunt neque unde nulla commodi corrupti aspernatur
                quae? Velit aliquid deleniti obcaecati, temporibus beatae optio
                unde quibusdam! Dicta minima tempore deleniti esse eum delectus
                consectetur unde quaerat reprehenderit.
              </p>
            </div>
            <div className="ml-3 w-[500px] pl-6 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                necessitatibus quae magnam dolore ut commodi tempora aliquam
                iure hic illum nesciunt ducimus repudiandae laudantium vel sunt
                nam voluptatum deleniti, dignissimos officiis reiciendis
                architecto eligendi explicabo dolorum rerum! Magni illum
                assumenda, cum sit eos debitis obcaecati reprehenderit quod quam
                veritatis repellendus laborum. Tempore, voluptas quos.
                Voluptatem obcaecati fuga vitae ea enim quia aspernatur,
                officiis temporibus alias, nam ut ad beatae libero inventore.
                Accusamus incidunt neque unde nulla commodi corrupti aspernatur
                quae? Velit aliquid deleniti obcaecati, temporibus beatae optio
                unde quibusdam! Dicta minima tempore deleniti esse eum delectus
                consectetur unde quaerat reprehenderit.
              </p>
            </div>
            <div className="ml-3 w-[500px] pl-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                necessitatibus quae magnam dolore ut commodi tempora aliquam
                iure hic illum nesciunt ducimus repudiandae laudantium vel sunt
                nam voluptatum deleniti, dignissimos officiis reiciendis
                architecto eligendi explicabo dolorum rerum! Magni illum
                assumenda, cum sit eos debitis obcaecati reprehenderit quod quam
                veritatis repellendus laborum. Tempore, voluptas quos.
                Voluptatem obcaecati fuga vitae ea enim quia aspernatur,
                officiis temporibus alias, nam ut ad beatae libero inventore.
                Accusamus incidunt neque unde nulla commodi corrupti aspernatur
                quae? Velit aliquid deleniti obcaecati, temporibus beatae optio
                unde quibusdam! Dicta minima tempore deleniti esse eum delectus
                consectetur unde quaerat reprehenderit.
              </p>
            </div>
          </div>

          <Banner />
          <h2 className="items-center dark:text-gray-100">Home Works!</h2>
        </div>
      </main>

      {/* <main className="i flex min-h-screen flex-col bg-white dark:bg-gray-900">
          <div className="">
            <h2>Home Works!</h2>
          </div>
        </main> */}
    </>
  );
}
