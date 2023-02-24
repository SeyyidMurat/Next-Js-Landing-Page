import React from 'react';
import Image from 'next/image';
import {
	WhiteLogo,
	YoutubeIcon,
	InstagramIcon,
	TwitterIcon,
	FacebookIcon,
	PrisentIcon,
	TiktokIcon,
} from '../assets/icons/index';
import { FooterColumn } from './index';
const Footer = () => {
	return (
		<footer className="footer">
			<div className="flex-center">
				<div className="footer_container">
					<div className="footer_logo">
						<WhiteLogo />
					</div>
					<div className="footer_links footer_links-mobile">
						<FooterColumn title="Online Servisler">
							<div className="footer_column-item">
								<ul>
									<li>Bireysel Terapi</li>
									<li>Aile - Çift Terapisi</li>
									<li>Çocuk - Ergen Terapisi</li>
									<li>Cinsel Terapi</li>
									<li>LGBT+</li>
								</ul>
								<ul>
									<li>Psikolog Öneri (Tavsiye)</li>
									<li>Psikolojik Testler </li>
									<li>Psikoloğa Soru Sor</li>
									<li> Psikolojik Danışman </li>
									<li>Mindfulness</li>
								</ul>
							</div>
						</FooterColumn>
						<FooterColumn>
							<div className="footer_column-item">
								<ul>
									<li>Psikolog Randevu</li>
									<li>Psikolog Ücretleri</li>
									<li>Psikolog Ara</li>
								</ul>
								<ul>
									<li>Hakkımızda</li>
									<li>Sıkça Sorulan Sorular </li>
									<li>İletişim</li>
								</ul>
							</div>
						</FooterColumn>
						<FooterColumn title="İçerikler">
							<div className="footer_column-item">
								<ul>
									<li>Psikolojik Hastalıklar (Rahatsızlıklar)</li>
									<li>Antidepresanlar</li>
								</ul>
								<ul>
									<li>Blog</li>
								</ul>
							</div>
						</FooterColumn>
						<FooterColumn title="Sosyal Medya">
							<div className="footer_social-icons">
								<span className="footer_social-link">
									<YoutubeIcon />
								</span>
								<span className="footer_social-link">
									<InstagramIcon />
								</span>
								<span className="footer_social-link">
									<TwitterIcon />
								</span>
								<span className="footer_social-link">
									<FacebookIcon />
								</span>
								<span className="footer_social-link">
									<PrisentIcon />
								</span>
								<span className="footer_social-link">
									<TiktokIcon />
								</span>
							</div>
						</FooterColumn>
						<div className="footer_pay">
							<div className="footer_pay-text">
								Gizlilik Politikası | Hizmet Sözleşmesi | KVKK Bildirimi
							</div>
							<div className="footer_pay-img">
								<Image src="/img/payment.png" fill objectFit="contain" />
							</div>
						</div>

						<div className="footer_info">
							Kendinize/bir başkasına zarar vermeyi ya da intihar etmeyi düşünüyorsanız lütfen bu
							platformu kullanmayın.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
