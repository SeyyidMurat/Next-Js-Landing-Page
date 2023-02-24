import React from 'react';
import { MeetingCard } from './index';
import useWindowSize from '../hooks/useWindowSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';
const Meetings = () => {
	const { width } = useWindowSize();

	const moreElement = () => {
		return (
			<>
				<SwiperSlide>
					<div className="meeting_card-grid">
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
						<MeetingCard status="busy" />
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
						<MeetingCard status="busy" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="meeting_card-grid">
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
						<MeetingCard status="busy" />
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
						<MeetingCard status="busy" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="meeting_card-grid">
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
						<MeetingCard status="busy" />
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
						<MeetingCard status="busy" />
					</div>
				</SwiperSlide>
			</>
		);
	};

	const lessElement = () => {
		return (
			<>
				<SwiperSlide>
					<div className="meeting_card-grid">
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="meeting_card-grid">
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="meeting_card-grid">
						<MeetingCard new status="online" />
						<MeetingCard status="busy" />
					</div>
				</SwiperSlide>
			</>
		);
	};
	return (
		<div className="container">
			<Swiper
				pagination={true}
				modules={[Pagination]}
				spaceBetween={16}
				pagination={{
					clickable: true,
					bulletActiveClass: 'swiper-pagination-purple-active',
				}}
			>
				{width > 768 ? moreElement() : lessElement()}
			</Swiper>
		</div>
	);
};

export default Meetings;
