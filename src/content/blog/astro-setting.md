---
title: Astro 세팅
pubDate: 2026-04-30
description: Astro와 GitHub을 사용한 블로그 설정 및 운영 가이드
---

Astro + GitHub 조합으로 블로그를 운영하는 방법에 대한 설정 가이드입니다.

## 핵심 원칙

글을 쓸 때 반드시 최상단에 아래 Frontmatter를 포함해 주세요:
- **제목(title)**: 필수
- **날짜(pubDate)**: 필수
- **설명(description)**: 필수

이미지는 `./images/` 경로를 사용하고, 파일명은 날짜 기반으로 생성해 주세요.

## 이미지 관리

- 이미지 경로: `./images/`
- 파일명 예시: `20260430_01.jpg`, `20260430_02.jpg` 등

## 블로그 구조

- 포스트 위치: `src/content/blog/`
- 이미지 위치: `src/content/blog/images/` (또는 Astro 설정에 따라 `public/images/`)

이 설정대로 유지하면 블로그가 일관되게 운영됩니다.
