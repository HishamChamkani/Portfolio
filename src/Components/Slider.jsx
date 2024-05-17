import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='rounded-full' src='https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg'/>
        <h1 className="text-white mt-4 mb-2">Ameer Hamza</h1>
        <p className="text-white mb-4">
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p>
      </SwiperSlide>
      <SwiperSlide> <img className='rounded-full' src='https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg'/>
        <h1 className="text-white mt-4 mb-2">Syeda Hafsa</h1>
        <p className="text-white mb-4">
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p></SwiperSlide>
        <SwiperSlide> <img className='rounded-full' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M='/>
        <h1 className="text-white mt-4 mb-2">Najmus Saqib</h1>
        <p className="text-white mb-4">
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p></SwiperSlide>
      <SwiperSlide> <img className='rounded-full' src='https://media.istockphoto.com/id/1311655328/photo/im-the-best-asset-in-my-business.jpg?s=612x612&w=0&k=20&c=ebkVt_iY6rRjXvyx2CESPC8EtcWrv0nYt_y4IdKmN3M='/>
        <h1 className="text-white mt-4 mb-2">Palwasha</h1>
        <p className="text-white mb-4">
        Working with Anum has been an absolute pleasure. Her dedication to her craft is unmatched, and her attention to detail is commendable
        </p></SwiperSlide>
      ...
    </Swiper>
  );
};
