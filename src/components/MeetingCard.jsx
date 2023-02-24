import React from 'react';
import Image from 'next/image';
import { Ellipse } from './index';
import { PlayIcon, StarIcon, EducationIcon, MicIcon, VideoIcon } from '../assets/icons/index';
const MeetingCard = (props) => {
	return (
		<article className="meeting_card">
			<div className="meeting_card_img">
				<Image src="/img/psikolog.jpg" alt="psikolog-img" fill />
				<div className="meeting_card_controller">
					{props.new && props.status === 'online' ? (
						<div className="meeting_card_controller-new">Yeni</div>
					) : (
						<div></div>
					)}
					<button>
						<PlayIcon />
					</button>
					<div className="meeting_card_controller-footer">
						<span className="align-center">
							<Ellipse width={10} height={10} bgColor={props.status !== 'online' ? '#d6d6d6' : ''} />
							<span className="meeting_card_controller-footer-left-inner">
								{props.status === 'online' ? 'Çevrimiçi' : 'Meşgul'}
							</span>
						</span>
						<div className="align-center">
							<span>
								<StarIcon />
							</span>
							<span className="meeting_card_controller-footer-right-inner">9,8</span>
						</div>
					</div>
				</div>
			</div>
			<div className="meeting_card_desc">
				<div className="meeting_card_desc-name">
					<div className="meeting_card_desc-name-title">
						<Ellipse width={12} height={13} bgColor={props.status !== 'online' ? '#d6d6d6' : ''} />
						<div>Şebnem Akı Karaoğlu</div>
					</div>
					<span className="meeting_card_desc-name-subtitle">Uzman Psikolog</span>
				</div>
				<div className="meeting_card_desc-feature">
					<div className="meeting_card_desc-feature-col">
						<span>
							<EducationIcon />
						</span>
						<span className="meeting_card_desc-feature-col-title">Profil</span>
						<span className="meeting_card_desc-feature-col-subtitle">Boğaziçi Üniversitesi</span>
					</div>
					<div className="meeting_card_desc-feature-col">
						<span>
							<MicIcon />
						</span>
						<span className="meeting_card_desc-feature-col-title">119₺</span>
						<span className="meeting_card_desc-feature-col-subtitle">Sesli 30 dk</span>
					</div>
					<div className="meeting_card_desc-feature-col">
						<span>
							<VideoIcon />
						</span>
						<span className="meeting_card_desc-feature-col-title">149₺</span>
						<span className="meeting_card_desc-feature-col-subtitle">Görüntülü 30 dk.</span>
					</div>
				</div>
			</div>
			<div className="meeting_card_btns">
				{props.status === 'online' && <button className="meeting_card_btn-green">Şimdi Konuş</button>}
				<button className="meeting_card_btn-purple">Randevu Al</button>
			</div>
		</article>
	);
};

export default MeetingCard;
