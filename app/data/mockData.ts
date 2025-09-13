// 개발 지표 관련 목업 데이터

// 일별 커밋 수 데이터
export const commitData = [
  { name: '월', commits: 12 },
  { name: '화', commits: 19 },
  { name: '수', commits: 8 },
  { name: '목', commits: 15 },
  { name: '금', commits: 22 },
  { name: '토', commits: 5 },
  { name: '일', commits: 3 }
];

// 주간 코드 라인 수 데이터
export const codeLinesData = [
  { name: '1주차', lines: 450 },
  { name: '2주차', lines: 520 },
  { name: '3주차', lines: 380 },
  { name: '4주차', lines: 610 },
  { name: '5주차', lines: 480 },
  { name: '6주차', lines: 720 }
];

// 프로젝트별 작업 시간 데이터
export const projectTimeData = [
  { name: '프론트엔드', hours: 35, color: '#3B82F6' },
  { name: '백엔드', hours: 28, color: '#10B981' },
  { name: '데이터베이스', hours: 15, color: '#F59E0B' },
  { name: '테스트', hours: 12, color: '#EF4444' },
  { name: '문서화', hours: 8, color: '#8B5CF6' }
];

// 월별 버그 수정 데이터
export const bugFixData = [
  { name: '1월', bugs: 23 },
  { name: '2월', bugs: 18 },
  { name: '3월', bugs: 31 },
  { name: '4월', bugs: 12 },
  { name: '5월', bugs: 8 },
  { name: '6월', bugs: 15 }
];

// 기술 스택 사용률 데이터
export const techStackData = [
  { name: 'React', percentage: 35 },
  { name: 'TypeScript', percentage: 25 },
  { name: 'Node.js', percentage: 20 },
  { name: 'Python', percentage: 12 },
  { name: '기타', percentage: 8 }
];

// 개발자 생산성 지표
export const productivityMetrics = {
  totalCommits: 1247,
  totalLinesOfCode: 15680,
  averageDailyCommits: 8.2,
  codeReviewTime: 2.3, // 시간
  testCoverage: 87.5, // 퍼센트
  deploymentFrequency: 12, // 주당 배포 횟수
  leadTime: 4.2, // 일
  mttr: 1.8 // 평균 복구 시간 (시간)
};

// 최근 활동 데이터
export const recentActivities = [
  {
    id: 1,
    type: 'commit',
    message: 'feat: 사용자 인증 기능 추가',
    timestamp: '2시간 전',
    author: '김개발'
  },
  {
    id: 2,
    type: 'pull_request',
    message: 'PR #123: API 엔드포인트 최적화',
    timestamp: '4시간 전',
    author: '이코더'
  },
  {
    id: 3,
    type: 'deployment',
    message: 'v1.2.3 배포 완료',
    timestamp: '6시간 전',
    author: '박개발'
  },
  {
    id: 4,
    type: 'bug_fix',
    message: '로그인 버그 수정',
    timestamp: '8시간 전',
    author: '최프로그래머'
  }
];
