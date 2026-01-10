'use client';

import { memo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./ResponsiveHero.css";

const ResponsiveHero = memo(({ className = "" }) => {
  const router = useRouter();

  const handleCurriculumClick = () => {
    router.push("/curriculum/elementary");
  };

  return (
    <section className={`hero-section ${className}`}>
      <div className="hero-container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text-wrapper">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                <span className="hero-title-line">수학은 습관!</span>
                <span className="hero-title-line">성적은 데이터!</span>
              </h1>
              <p className="hero-description">
                진단→개별맞춤→오답코칭 루프로 매주 성장합니다. <br></br>
                학부모 리포트로 변화가 보입니다.
              </p>
              <button
                className="hero-cta-btn"
                onClick={handleCurriculumClick}
              >
                View Curriculum
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <div className="hero-image-wrapper">
            <Image
              src="/Image@2x.png"
              alt="수학의힘 학습 이미지"
              priority
              width={600}
              height={400}
              className="hero-image"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ResponsiveHero.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveHero;