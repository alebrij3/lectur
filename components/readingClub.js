import Image from 'next/image';
import bookCover from '../public/el-club-de-la-salamandra.jpeg';

export default function ReadingClub() {
  return (
    <div>
      <style jsx>{`
        .book-cover {
          position: relative;
          width: 98px;
          height: 148px;
        }

        .book-cover > div {
          background-color: #eaeaea;
          border-radius: 50%;
          position: absolute;
        }

        .div_1,
        .div_3,
        .div_5,
        .div_7,
        .div_9,
        .div_10 {
          width: 36px;
          height: 36px;
        }

        .div_2,
        .div_4,
        .div_6,
        .div_8 {
          width: 20px;
          height: 20px;
        }

        .div_1 {
          top: -15px;
          right: -64px;
        }

        .div_2 {
          top: 60px;
          right: -100px;
        }

        .div_3 {
          bottom: 35px;
          right: -60px;
        }

        .div_4 {
          bottom: -20px;
          right: -100px;
        }

        .div_5 {
          bottom: -40px;
          right: -48px;
        }

        .div_6 {
          bottom: -60px;
          lefto: 20px;
        }

        .div_7 {
          left: -50px;
          bottom: -20px;
        }

        .div_8 {
          left: -60px;
          bottom: 50%;
        }

        .div_9 {
          top: 50%;
          left: -90px;
        }

        .div_10 {
          top: -20px;
          left: -60px;
        }
      `}</style>
      <div style={{ position: 'relative' }}>
        <div className='book-cover'>
          <Image src={bookCover} alt='' width={98} height={148} />
          <div className='div_1'></div>
          <div className='div_2'></div>
          <div className='div_3'></div>
          <div className='div_4'></div>
          <div className='div_5'></div>
          <div className='div_6'></div>
          <div className='div_7'></div>
          <div className='div_8'></div>
          <div className='div_9'></div>
          <div className='div_10'></div>
        </div>
      </div>
    </div>
  );
}
