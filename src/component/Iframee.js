import React, { useEffect, useState } from 'react';

const Iframee = ({ keyNum }) => {
	// 젤 처음엔 true로 넘어오니까 젤 처음에 보여주고 싶은 화면을 여기 적어주세요 
	const [panoramaData, setPanoramaData] = useState(
		{
			img: 'img1.jpg',
			position: '2171.10,-1318.29,-4295.12',
			infospot_no: '',
			info_desc: '첫번째 이미지 입니다.'
		}
	);
	// 한 번만 실행
	// 버튼 누른다 == keynum이 변한다. [keyNum] 이게 변하면 한번 더 useEffect 실행
	useEffect(
		() => {
			const getPano = () => {
				fetch(`http://localhost:8080/main/${keyNum === true ? 0 : keyNum}`, {
					method: "get",
				}).then((res) => res.json())
					.then((res) => {
						setPanoramaData(res);
					});
			}
			getPano();
		}
		, [keyNum])


	return (
		<div>
			<div hidden id="img">{panoramaData?.img}</div>
			<div hidden id="position">{panoramaData?.position}</div>
			<div hidden id="infospot_no">{panoramaData?.infospot_no}</div>
			<div hidden id="info_desc">{panoramaData?.info_desc}</div>
			<iframe
				src={"./sub.html"}
				name="jej"
				width={window.innerWidth}
				height={window.innerHeight}
				sandbox="allow-scripts allow-popups allow-same-origin allow-modals">
			</iframe>
		</div>
	);
};

export default Iframee; 