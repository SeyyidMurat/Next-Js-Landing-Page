import React from 'react';
import { TherapyCard } from './index';
import { PurplePlayIcon } from '../assets/icons/index';
import useWindowSize from '../hooks/useWindowSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';
const OnlineTherapy = () => {
	const { width } = useWindowSize();

	const caurosel = () => {
		return (
			<div className="online_therapy-wrapper-padding">
				<Swiper
					slidesPerView={2}
					spaceBetween={16}
					pagination={{
						clickable: true,
						bulletActiveClass: 'swiper-pagination-blue-active',
						horizontalClass: 'text-start',
					}}
					modules={[Pagination]}
					className="mySwiper"
					style={{ paddingBottom: '50px' }}
				>
					<SwiperSlide>
						<TherapyCard title="Bireysel Terapi" img="/img/bireysel-terapi.png" backgroundColor="#60b3fd" />
					</SwiperSlide>
					<SwiperSlide>
						<TherapyCard
							title="Aile & Çift Terapisi"
							img="/img/aile-çift-terapi.png"
							backgroundColor="#b09bff"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TherapyCard
							title="Çocuk ve Ergen Terapisi"
							img="/img/çocuk-ergen-terapi.png"
							backgroundColor="#fff59b"
							color="#2a2a2a"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TherapyCard
							title="Psikolog Seçmeme Yardım Et"
							img="/img/seçmeme-yardım etme.png"
							backgroundColor="#14e093"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TherapyCard title="Cinsel Terapi" img="/img/cinsel-terapi.png" backgroundColor="#fd65e2" />
					</SwiperSlide>
				</Swiper>
			</div>
		);
	};

	return (
		<div className="online_therapy bg-none-mobile">
			<div className="online_therapy-title">Online Terapi</div>

			{width > 768 ? (
				<div className="flex-center">
					<div className="online_therapy-wrapper-grid">
						<TherapyCard title="Bireysel Terapi" img="/img/bireysel-terapi.png" backgroundColor="#60b3fd" />
						<TherapyCard
							title="Aile & Çift Terapisi"
							img="/img/aile-çift-terapi.png"
							backgroundColor="#b09bff"
						/>
						<TherapyCard
							title="Çocuk ve Ergen Terapisi"
							img="/img/çocuk-ergen-terapi.png"
							backgroundColor="#fff59b"
							color="#2a2a2a"
						/>
						<TherapyCard title="Cinsel Terapi" img="/img/cinsel-terapi.png" backgroundColor="#fd65e2" />
						<TherapyCard
							title="Psikolog Seçmeme Yardım Et"
							img="/img/seçmeme-yardım etme.png"
							backgroundColor="#14e093"
						/>
						<div className="online_therapy-card-purple">
							<div className="online_therapy-card-purple-text">Psikoloğa nasıl bağlanırım?</div>
							<button className="btn-live-purple">
								<span className="btn-live-purple-icon">
									<PurplePlayIcon />
								</span>
								<span className="btn-live-purple-text">Videoyu İzle</span>
							</button>
						</div>
					</div>
				</div>
			) : (
				caurosel()
			)}
		</div>
	);
};

export default OnlineTherapy;
