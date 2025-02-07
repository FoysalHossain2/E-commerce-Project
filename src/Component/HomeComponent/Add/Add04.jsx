import React from "react";

const Add04 = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6">
        <div
          className="bg-cover bg-center relative w-full lg:max-w-[470px]  h-[200px] rounded-lg shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(data:image/jpeg;base64,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W+0ubGItJa4EOabOaQQWncWnMHgV9bLS6f5K0lZ/iIWucMg8XZIOGNtjbgcl6PT9e4bTVr7nOUL4PmZoVSur6X5nTmaWpBGxk7f4rBq/YXmazmx0kzVCyT/blYf3y0+penDrMMltL67HFwkvgeMugdqv8nZ61uarkjXx+XRz/sxOkHeYwQFr6jRM4F3RyCxF7se22fYurnFrZkUWXG0W+eCtLc94V7KCQ6mk23XPuVJKGTX0b8toY6x9yvqRFFLW1KwnsVzaWTYxx/ZPwUmLQ9S7yaed32YZXexqjUu4ohdis7V6jR3IPSMvk0kjQdsuGIDtDyHeAK9noDmdza+snBGRMUIOf1TMbH0QO1cMnVYocy+m5dRbOb6C0JPVy9HTxF7hrtk1oO17jk0duZ2XXZ+RfNpDSObNORNOM25fmozrBa05ucPOO4EAL2ejNHRU8YigjbGwamtFhfaTvJ2k5lSl5PUddPJtHZfc6xxpchERYToEREAREQBERAEREAREQBUsqogLC3irHRHzisyICI+lcf0ysL9HvP61y2KIDTv0TIf17lidoSX6d3r+K3qIDz50FL9OfX8U/sOX6c/e+K9AiA8//Ycv058XfFXDQkv+Yd6/it8iA0rdES/Tu9azM0bJ9M5bREBBZROH6wrM2A+cVIRAYxGd6uAVyICllVEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==)`,
          }}
        >
          <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
          <div className="text-center z-10">
            <h3 className="text-3xl font-bold text-white font-DM_Sans">
              Top Rated Chair
            </h3>
            <p className="text-white">Under $120</p>
            <button className="mt-4 px-3 py-1 text-[15px] bg-orange-400 text-white rounded-lg hover:bg-orange-500 hover:bg-black/40">
              Shop Now
            </button>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative w-full lg:max-w-[470px] max-w-[] h-[200px] rounded-lg shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Flife-3d-home-interior-room-furniture-house-design-relax-wallpaper-mofbg&psig=AOvVaw0ry_iBTisDyBaWe78DkmJE&ust=1735056005381000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi9mMmhvooDFQAAAAAdAAAAABAE)`,
          }}
        >
          <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
          <div className="text-center z-10">
            <h3 className="text-3xl font-bold text-white font-DM_Sans">
              Top Rated Chair
            </h3>
            <p className="text-white">Under $120</p>
            <button className="mt-4 px-3 py-1 text-[15px] bg-orange-400 text-white rounded-lg hover:bg-orange-500 hover:bg-black/40">
              Shop Now
            </button>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative w-full lg:max-w-[470px] max-w-[] h-[200px] rounded-lg shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Flife-3d-home-interior-room-furniture-house-design-relax-wallpaper-mofbg&psig=AOvVaw0ry_iBTisDyBaWe78DkmJE&ust=1735056005381000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi9mMmhvooDFQAAAAAdAAAAABAE)`,
          }}
        >
          <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
          <div className="text-center z-10">
            <h3 className="text-3xl font-bold text-white font-DM_Sans">
              Top Rated Chair
            </h3>
            <p className="text-white">Under $120</p>
            <button className="mt-4 px-3 py-1 text-[15px] bg-orange-400 text-white rounded-lg hover:bg-orange-500 hover:bg-black/40">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative w-full lg:max-w-[470px] max-w-[] h-[200px] rounded-lg shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Flife-3d-home-interior-room-furniture-house-design-relax-wallpaper-mofbg&psig=AOvVaw0ry_iBTisDyBaWe78DkmJE&ust=1735056005381000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi9mMmhvooDFQAAAAAdAAAAABAE)`,
          }}
        >
          <div className="absolute inset-0 hover:bg-black/40 rounded-lg"></div>
          <div className="text-center z-10">
            <h3 className="text-3xl font-bold text-white font-DM_Sans">
              Top Rated Chair
            </h3>
            <p className="text-white">Under $120</p>
            <button className="mt-4 px-3 py-1 text-[15px] bg-orange-400 text-white rounded-lg hover:bg-orange-500 hover:bg-black/40">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add04;
