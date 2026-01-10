import Link from "next/link";
import "../../../pages/Curriculum.css";

export const metadata = {
    title: "초등부 커리큘럼 - 수학의힘",
    description: "초등 수학 전문 커리큘럼으로 기초부터 심화까지",
};

export default function CurriculumElementary() {
    return (
        <main className="curriculum-page curriculum-main">
            {/* Header Section */}
            <section className="curriculum-header-section">
                <div className="container">
                    <h1 className="curriculum-page-title">Curriculum</h1>
                    <div className="curriculum-tabs">
                        <button className="curriculum-tab active">
                            초등부 커리큘럼
                        </button>
                        <Link href="/curriculum/middle">
                            <button className="curriculum-tab">
                                중등부 커리큘럼
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="curriculum-content-section">
                <div className="container">
                    <div className="curriculum-images">
                        <div className="curriculum-image-wrapper">
                            <img
                                src="/1st-img-1@2x.png"
                                alt="초등부 커리큘럼 1"
                                className="curriculum-image"
                            />
                        </div>
                        <div className="curriculum-image-wrapper-sm">
                            <img
                                src="/1st-img-2@2x.png"
                                alt="초등부 커리큘럼 2"
                                className="curriculum-image"
                            />
                        </div>
                        <div className="curriculum-image-wrapper">
                            <img
                                src="/1st-img-3-1@2x.png"
                                alt="초등부 커리큘럼 3"
                                className="curriculum-image"
                            />
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="curriculum-info-cards">
                        <div className="curriculum-info-card">
                            <h3>단계별 맞춤 학습</h3>
                            <p>학생의 수준에 맞는 단계별 학습으로 기초부터 심화까지</p>
                        </div>
                        <div className="curriculum-info-card">
                            <h3>체계적인 관리</h3>
                            <p>정기적인 평가와 피드백으로 학습 성과 극대화</p>
                        </div>
                        <div className="curriculum-info-card">
                            <h3>소수정예 수업</h3>
                            <p>학생 한 명 한 명에게 집중하는 소수정예 교육</p>
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
