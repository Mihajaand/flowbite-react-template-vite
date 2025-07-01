import { Card } from "flowbite-react";
 import test from "../assets/logo/test.png"

export function Banner() {
    return (
        <div className="flex flex-col mt-40! w-2xl">
            <Card className="w-auto">
                <h2 className="dark:text-gray-50 font-bold uppercase p-4 mt-2 ">Sneakers</h2>
                <img alt="photos by you" src={test} />
            </Card>
        </div>
    );
}