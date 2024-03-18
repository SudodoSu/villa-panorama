import ShowcaseGallery from "@/components/Gallery/ShowcaseGallery";
import ShowcaseGallery2 from "@/components/Gallery/ShowcaseGallery2";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";

function Photogallery() {
  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="">
        <h2 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black tracking-wider">
          Photogallery Villa Panorama, Istra
        </h2>
        <div>
          <div>
            <ShowcaseGallery />
          </div>
        </div>
        <div>
          <ShowcaseGallery2 />
        </div>
        <div className="mb-24">
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Photogallery;
