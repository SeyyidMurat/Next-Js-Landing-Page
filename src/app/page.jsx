'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { SearchIcon, MessageIcon, SettingIcon, HeartLogo, PlayIcon } from '../assets/icons/index';
import { Header, TherapyCard, TherapyStartCard, Accordion, Footer } from '../components/index';
import Meetings from '@/components/Meetings';
import OnlineTherapy from '@/components/OnlineTherapy';

const page = () => {
	const accordionToggleRef = useRef(null);
	return (
		<div>
			<Header />
			<section className="container">
				<h1 className="main_header text-start-mobile">
					Online psikolog seç ve dakikalar içinde <span>online terapiye</span> başla
				</h1>
			</section>

			<section className="container">
				<div className="main_meeting-search">
					<div className="main_meeting-search-input">
						<label htmlFor="meeting-search">
							<SearchIcon width={14} height={14} color="#999898" />
						</label>
						<input
							type="text"
							id="meeting-search"
							className="main_meeting-search-input"
							placeholder="Psikolog, uzmanlık alanı ara"
						/>
					</div>
					<button className="main_meeting-search-btn">
						<SettingIcon />
					</button>
				</div>
			</section>
			<Meetings />
			<OnlineTherapy />
			<section className="therapy_connect">
				<div className="therapy_connect-title">
					Online Psikoloğa <br /> Nasıl Bağlanırım?
				</div>
				<div className="therapy_connect-img">
					<Image src="/img/terapi-connect.png" alt="terapi-connect-img" fill objectFit="contain" />
				</div>
				<button className="btn-green btn-normal">Psikolog Seç</button>
			</section>
			<section className="psychologist_select flex-center">
				<div className="psychologist_select-wrapper">
					<div className="psychologist_select-inner">
						<div className="psychologist_select-title">Psikoloğunuzu birlikte seçelim mi?</div>
						<div className="psychologist_select-subtitle">
							Platformumuza kayıtlı yüzlerce psikolog arasından <br /> sizin için en uygun olanını
							birlikte bulalım.
						</div>
					</div>
					<button className="btn-white btn-normal ">Seçmeme Yardım Et</button>
					<Image
						src="/img/psikolog-seçme-bg.png"
						alt="threapy-img"
						width={182}
						height={234}
						style={{ position: 'absolute', right: 0, bottom: 0 }}
					/>
				</div>
			</section>
			<section className="what_therapy flex-center">
				<div className="what_therapy-container ">
					<div className="what_therapy-wrapper what_therapy-wrapper-mobile ">
						<div className="what_therapy-title">Online terapi nedir?</div>
						<p className="what_therapy-desc">
							Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
							bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini
							alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak
							kullanılmıştır. Beş yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye
							de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye
							de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye
							de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye
							de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. Lorem Ipsum, dizgi ve baskı endüstrisinde
							kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune
							kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri
							standardı sahte metinler olarak kullanılmıştır. Beş yüz yıl boyunca varlığını sürdürmekle
							kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle
							kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle
							kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle
							kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. aynı zamanda pek
							değişmeden elektronik dizgiye de sıçramıştır. Beş yüz yıl boyunca varlığını sürdürmekle
							kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Lorem Ipsum, dizgi
							ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
							matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
							karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beş
							yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
							dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Beş
							yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
							dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Beş
							yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
							dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Beş
							yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
							dizgiye de sıçramıştır. aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. Beş
							yüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
							dizgiye de sıçramıştır.
						</p>
					</div>
					<div className="what_therapy-btns what_therapy-btns-mobile ">
						<button className="btn-purple btn-small">Psikolog Seç</button>
						<button className="btn-live">
							<span className="btn-live-icon btn-live-small-icon ">
								<MessageIcon />
							</span>
							<span className="btn-live-small-text">Canlı Destek</span>
						</button>
					</div>
				</div>
			</section>
			<section className="therapy_start">
				<div className="therapy_start-title">Online terapiye başlamak için;</div>
				<div className="flex-center flex-col">
					<div className="therapy_start-grid">
						<TherapyStartCard
							title="1. Psikolog seçin"
							img="/img/online-terapi-1.png"
							desc="Terapi almak istediğiniz
							psikoloğu seçin ve ücretsiz
							olarak hesabınızı açın."
						/>
						<TherapyStartCard
							title="2. Ödemenizi gerçekleştirin"
							img="/img/online-terapi-2.png"
							desc="256 Bit SSL ile korunan güvenli 
							sayfamızda kredi kartı ya da
							banka kartınızla ödemenizi
							yapın."
						/>
						<TherapyStartCard
							title="3. İstediğiniz yerden bağlanın"
							img="/img/online-terapi-3.png"
							desc="Bir dakika içinde seçtiğiniz uzmanla 
							görüntülü ya da sesli olarak online 
							terapiye başlayın. İster akıllı 
							telefonunuzdan ister 
							bilgisayarınızdan."
						/>
					</div>
					<div className="therapy_start-btns flex-col-mobile">
						<button className="btn-purple btn-large">Psikolog Seç</button>
						<span>veya</span>
						<button className="btn-live">
							<span className="btn-live-icon btn-live-large-icon ">
								<MessageIcon />
							</span>
							<span className="btn-live-large-text">Canlı Destek</span>
						</button>
					</div>
				</div>
			</section>
			<section className="container-lg">
				<div className="fqa fqa_background-mobile">
					<div className="fqa_title">Sıkça Sorulan Sorular</div>
					<div className="flex-center flex-col">
						<div className="fqa_container">
							<div className="fqa_container-grid flex-col-mobile">
								<div className="fqa_container-col">
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Online terapi nedir?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Online terapi kimler için uygundur?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Online terapi güvenli mi?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Psikolog mu psikiyatrist mi?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="fqa_container-col d-none-mobile" ref={accordionToggleRef}>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Online terapi nedir?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Online terapi kimler için uygundur?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Online terapi güvenli mi?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
									<Accordion>
										<Accordion.Item>
											<Accordion.Header>Psikolog mu psikiyatrist mi?</Accordion.Header>
											<Accordion.Body>
												"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
												Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
												oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
												beri endüstri standardı sahte metinler olarak kullanılmıştır.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
							</div>
							<button
								className="fqa_all-select"
								onClick={() => accordionToggleRef.current.classList.toggle('flex')}
							>
								Tümünü gör
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="speaking bg-none-mobile">
				<div className="flex-center">
					<div className="speaking_container flex-col-mobile">
						<div className="speaking_img">
							<Image src="/img/speaking.png" fill objectFit="contain" />
						</div>
						<div className="speaking_desc text-center-mobile">
							<div className="speaking_desc-title">Haydi biraz konuşalım</div>
							<div className="speaking_desc-text">
								Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
								bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere
							</div>
							<button className="btn-purple btn-medium">Psikolog Seç</button>
						</div>
					</div>
				</div>
			</section>
			<section className="our_content">
				<div className="flex-center">
					<div className="our_content-container flex-col-mobile text-center-mobile">
						<div className="our_content-desc">
							<div className="our_content-desc-logo">
								<HeartLogo />
							</div>
							<div className="our_content-desc-title">İçeriklerimizi çok seveceksiniz</div>
							<div className="our_content-desc-text">
								Alanında uzman psikologların hazırladığı içerikleri mutlaka okuyun
							</div>
						</div>
						<div className="our_content-cards">
							<div className="our_content-card-yellow">
								<div>
									<div className="our_content-card-yellow-text">Online Terapi Hakkında Her şey!</div>
									<button className="our_content-card-yellow-btn">Oku</button>
								</div>
								<Image src="/img/oline-terapi.png" alt="threapy-img" height={135} width={112} />
							</div>
							<div className="our_content-cards-col">
								<TherapyCard
									title="Psikolojik Rahatsızlıklar"
									img="/img/psikolojik-rahasıtsızlık.png"
									backgroundColor="#b09bff"
								/>
								<TherapyCard
									title="Psikoloji Blogu"
									img="/img/pskilolg-blog.png"
									backgroundColor="#60b3fd"
								/>
							</div>
							<div className="our_content-card-purple">
								<div className="our_content-card-purple-text">Psikolojik Testler</div>
								<Image src="/img/psikolojik-testler.png" alt="threapy-img" height={134} width={146} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="what_connect">
				<div className="flex-center">
					<div className="what_connect-container flex-col-mobile text-center-mobile bg-none-mobile">
						<div className="what_connect-text">
							Psikoloğa nasıl <br /> bağlanırım?
						</div>
						<div className="what_connect-img">
							<Image src="/img/bg-3.png" alt="what-connect-img" fill objectFit="contain" />
							<button className="what_connect-img-btn">
								<PlayIcon />
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default page;
