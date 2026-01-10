'use client';

import { memo } from "react";
import "./MapPlaceholder.css";

const MapPlaceholder = memo(() => {
    const handleNaverMap = () => {
        window.open("https://map.naver.com/p/search/수학의힘/place/1938388947", "_blank");
    };

    const handleKakaoMap = () => {
        // Search for the address in Kakao Map
        window.open("https://map.kakao.com/link/search/세종시 한누리대로 2018", "_blank");
    };

    return (
        <div className="map-placeholder-container">
            <div className="map-overlay">
                <h3 className="map-title">지도 보기</h3>
                <p className="map-address">세종시 한누리대로 2018 사이언스 타운 4층</p>
                <div className="map-buttons">
                    <button className="map-btn naver" onClick={handleNaverMap}>
                        네이버 지도
                    </button>
                    <button className="map-btn kakao" onClick={handleKakaoMap}>
                        카카오 맵
                    </button>
                </div>
            </div>
        </div>
    );
});

export default MapPlaceholder;
