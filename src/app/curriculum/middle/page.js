import Link from "next/link";
import "../../../pages/Curriculum.css";

export const metadata = {
    title: "중등부 커리큘럼 - 수학의힘",
    description: "중등 수학 전문 커리큘럼으로 내신부터 심화까지",
};

export default function CurriculumMiddle() {
    return (
        <main className="curriculum-page curriculum-main">
            {/* Header Section */}
            <section className="curriculum-header-section">
                <div className="container">
                    <h1 className="curriculum-page-title">Curriculum</h1>
                    <div className="curriculum-tabs">
                        <Link href="/curriculum/elementary">
                            <button className="curriculum-tab">
                                초등부 커리큘럼
                            </button>
                        </Link>
                        <button className="curriculum-tab active">
                            중등부 커리큘럼
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="curriculum-content-section">
                <div className="container">
                    <div className="curriculum-images middle-layout">
                        <div className="curriculum-image-wrapper">
                            <img
                                src="/mid1.png"
                                alt="중등부 커리큘럼 1"
                                className="curriculum-image"
                            />
                        </div>
                        <div className="curriculum-image-wrapper">
                            <img
                                src="/mid2.png"
                                alt="중등부 커리큘럼 2"
                                className="curriculum-image"
                            />
                        </div>
                        <div className="curriculum-image-wrapper">
                            <img
                                src="/mid3.png"
                                alt="중등부 커리큘럼 3"
                                className="curriculum-image"
                            />
                        </div>
                        <div className="curriculum-image-wrapper">
                            <img
                                src="/mid4.png"
                                alt="중등부 커리큘럼 4"
                                className="curriculum-image"
                            />
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="curriculum-info-cards">
                        <div className="curriculum-info-card">
                            <h3>내신 완벽 대비</h3>
                            <p>학교시험에 최적화된 내신관리 시스템</p>
                        </div>
                        <div className="curriculum-info-card">
                            <h3>심화 학습</h3>
                            <p>상위권을 위한 고난도 문제 풀이 훈련</p>
                        </div>
                        <div className="curriculum-info-card">
                            <h3>입시 준비</h3>
                            <p>특목고, 자사고 대비 맞춤 커리큘럼</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="curriculum-cta-section">
                <div className="container">
                    <div className="curriculum-cta-content">
                        <h2 className="curriculum-cta-title">상담 신청하기</h2>
                        <p className="curriculum-cta-description">
                            우리 아이에게 맞는 커리큘럼이 궁금하신가요?<br />
                            지금 바로 상담을 신청해보세요.
                        </p>
                        <a href="tel:044-715-5253" className="curriculum-cta-button">
                            전화 상담 신청
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
