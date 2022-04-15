import React, { useEffect, useState } from 'react';
import { THREE } from 'three.js';
import * as PANOLENS from "panolens";

const Panorams = ({ keyNum }) => {

	console.log('@@@@@', keyNum);

	const [panoram, setPanoram] = useState([]);

		useEffect(() => {
			document.body.style.overflow = 'hidden';
			getPano();
		}, []);

	const getPano = () => {
		fetch(`http://localhost:8080/main/1`, {
			method: "get",
			// res에 결과가 들어옴
		}).then((res) => res.json())
			.then((res) => {
				setPanoram(res);
				console.log(res);
			});
	}
	let panorama = new PANOLENS.ImagePanorama('./collage.jpg');
	
	//panorama = new PANOLENS.ImagePanorama(panoram.img);

	// 파노라마 이미지 선언
	// if (panoIMG !== undefined) {
	// 	panorama = new PANOLENS.ImagePanorama(panoIMG.image);
	// 	console.log(panoIMG.image);
	// 	panorama.link(new PANOLENS.ImagePanorama(panoIMG.image), null);

	// } else {
	// 	panorama = new PANOLENS.ImagePanorama('./img03.jpg');
	// 	console.log("unde");
	// }


	// let infospot = new PANOLENS.Infospot(300, '/link.png');
	// infospot.position.set(4985.94, -177.34, -135.33);
	// infospot.addHoverText('페이지 이동 버튼');
	// infospot.addEventListener('click', () => {
	// 	console.log('asd')
	// });
	//panorama.add(infospot);

	// 카메라 만들기
	var viewer = new PANOLENS.Viewer({
		output: 'console',
		cameraFov: 80,
		autoHideInfospot: false,
		autoRotate: true,
		autoRotateSpeed: 0.3,
		controlBar: false,
		container: document.querySelector('#container')

	});
	viewer.getCamera().fov = 60;
	viewer.getCamera().updateProjectionMatrix();
	viewer.getControl().rotateSpeed *= -1;
	viewer.getControl().momentumScalingFactor *= -1;
	viewer.onWindowResize(window.innerWidth, window.innerHeight);
	// 카메라 줌 레벨
	viewer.setCameraFov(60);
	viewer.reverseDraggingDirection();
	viewer.renderer.sortObjects = true;

	viewer.add(panorama);


	// var index = 0;
	// for (let image of imageList) {
	// 	console.log('111', index, panoramaList[image.linkTo-1])
	// 	panoramaList[index++].link(panoramaList[image.linkTo-1], new THREE.Vector3(image.linkPositon));
	// 	//let panorama = new PANOLENS.ImagePanorama(image.image);
	// 	//panoramaList.push(panorama);
	// }

	//panoramaList[0].link(panoramaList[1], new THREE.Vector3(4985.94, -177.34, -135.33));

	//panorama2.link( panorama1, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

	return (
		<>
			<div id="container"></div>
		</>
	);
};

export default Panorams;