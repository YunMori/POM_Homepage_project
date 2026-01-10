import Link from "next/link";
import "../pages/ResponsiveHome.css";

export const metadata = {
    title: "페이지를 찾을 수 없습니다 - 수학의힘",
};

export default function NotFound() {
    return (
        <div className="not-found-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#002C5F' }}>
                404
            </h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#333' }}>
                페이지를 찾을 수 없습니다.
            </h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
                요청하신 페이지가 존재하지 않거나, 주소가 변경되었을 수 있습니다.
            </p>
            <Link href="/">
                <button className="hero-cta-btn">
                    홈으로 돌아가기
                </button>
            </Link>
        </div>
    );
}
