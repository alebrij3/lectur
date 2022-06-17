import Image from 'next/image';
import bookCover from '../public/el-club-de-la-salamandra.jpeg';
import user1 from '../public/user_1.png';
import user2 from '../public/user_2.png';
import user3 from '../public/user_3.png';
import user4 from '../public/user_4.png';
import user5 from '../public/user_5.png';
import user6 from '../public/girl-reading.png';

export default function ReadingClub() {
  return (
    <div>
      <style jsx>{`
        .book-cover {
          position: relative;
          width: 98px;
          height: 148px;
          margin: 1rem auto;
        }

        .book-cover > div {
          background-color: #ffb366;
          border-radius: 50%;
          position: absolute;
          background-size: cover;
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
          width: 10px;
          height: 10px;
        }

        .div_1 {
          top: -9px;
          right: -64px;
          background-image: url('./user_1.png');
        }

        .div_2 {
          bottom: 35px;
          right: -60px;
        }

        .div_3 {
          top: 50px;
          right: -114px;
          background-image: url('./user_2.png');
        }

        .div_4 {
          bottom: -20px;
          right: -110px;
        }

        .div_5 {
          bottom: -30px;
          right: -48px;
          background-image: url('./user_3.png');
        }

        .div_6 {
          bottom: -50px;
          lefto: 20px;
        }

        .div_7 {
          left: -50px;
          bottom: -10px;
          background-image: url('./user_4.png');
        }

        .div_8 {
          left: -55px;
          top: 80px;
        }

        .div_9 {
          top: 58px;
          left: -113px;
          background-image: url('./user_5.png');
        }

        .div_10 {
          top: -10px;
          left: -60px;
          background-image: url('./girl-reading.png');
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
