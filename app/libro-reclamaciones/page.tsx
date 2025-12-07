"use client";
import React, { useState } from "react";
import { Section } from "/components/ui/custom-section";
import { Container } from "/components/ui/custom-container";
import { LibroHero } from "/components/libro-reclamaciones/LibroHero";
import { ConsumerIdentity } from "/components/libro-reclamaciones/ConsumerIdentity";
import { GoodIdentity } from "/components/libro-reclamaciones/GoodIdentity";
import { ClaimDetail } from "/components/libro-reclamaciones/ClaimDetail";
import { LegalDisclaimers } from "/components/libro-reclamaciones/LegalDisclaimers";
import { SubmissionSuccess } from "/components/libro-reclamaciones/SubmissionSuccess";

export default function LibroReclamaciones() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to top to ensure user sees the success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSubmitted(true);
  };

  return (
    <>
      <LibroHero />

      <Section className="bg-white py-16 md:py-24">
        <Container>
          {isSubmitted ? (
            <SubmissionSuccess />
          ) : (
            <div className="max-w-4xl mx-auto">
              <form className="space-y-12" onSubmit={handleSubmit}>
                <ConsumerIdentity />
                <GoodIdentity />
                <ClaimDetail />
                <LegalDisclaimers />
              </form>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}