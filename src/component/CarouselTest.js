import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../carouselStyle.css';
import Mapmodal from './Mapmodal';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// useEffect에서 전체 데이터 조회하면 됩니다 
const CarouselTest = ({ getKeyNum, setAuto, auto }) => {
	const imageList = [
		{ key: 0, image: './img1.jpg', linkTo: 2, x: 2171.10, y: -1318.29, z: -4295.12, contents: "테스트1" },
		{ key: 1, image: './img2.jpg', linkTo: 1, x: -2042.39, y: -759.05, z: -4497.36, contents: "테스트2" },
		{ key: 2, image: './img3.jpg', linkTo: 1, x: 2289.94, y: -84.80, z: -4433.42, contents: "테스트3" }
	];
	

	const [menuon, setMenuon] = useState(true);
	//const [auto, setAuto] = useState(false);

	let icon = 'stop';
	if (!auto) {
		icon = 'stop';
	} else {
		icon = 'play_arrow';
	}

	var panoramaList = [];
	for (let image of imageList) {
		panoramaList.push(image);
	}
	console.log('test');

	const setAutoRotate = () => {
		setAuto(!auto);
		sessionStorage.setItem('autoKey', auto);
	}

	return (
		<>
			{menuon == true ?
				<div style={{ position: 'absolute', width: '40%', height: '11%', bottom: '6%', left: '30%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
					<OwlCarousel className='owl-theme' dots={false} margin={10} items={5} >
						{panoramaList.map(function (img, index) {
							return <div key={index} className={'item'} style={{ color: 'white', cursor: 'pointer' }} onClick={(e) => {
								getKeyNum(img.key)
							}}>
								<img src={img.image} />
								<span>{img.contents}</span>
							</div>
						})}
					</OwlCarousel>
				</div> : null
			}
			<div style={{ position: 'absolute', float: 'left', width: '40%', height: '4%', bottom: '2%', left: '30%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
				<Mapmodal />
				<OverlayTrigger
					key='top2'
					placement='top'
					overlay={
						<Tooltip id={`tooltip-2`}>
							안내 이미지 보기/닫기
						</Tooltip>
					}
				>
					<span className="material-icons" style={{ color: 'white', fontSize: '30px', float: 'left' }} onClick={(e) => setMenuon(!menuon)}>
						sort
					</span>
				</OverlayTrigger>
				<OverlayTrigger
					key='top3'
					placement='top'
					overlay={
						<Tooltip id={`tooltip-2`}>
							자동 투어 끄기/켜기
						</Tooltip>
					}
				>
					<span className="material-icons-outlined" style={{ color: 'white', fontSize: '30px', float: 'left' }}

						onClick={setAutoRotate}>
						{icon}
					</span>
				</OverlayTrigger>
			</div>
		</>
	);
};

export default React.memo(CarouselTest);