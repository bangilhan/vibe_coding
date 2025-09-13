'use client';

import { 
  GitCommit, 
  Code, 
  Clock, 
  Bug, 
  TrendingUp, 
  Users, 
  Activity,
  BarChart3
} from 'lucide-react';
import MetricCard from './components/MetricCard';
import ChartCard from './components/ChartCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { 
  commitData, 
  codeLinesData, 
  projectTimeData, 
  bugFixData, 
  techStackData, 
  productivityMetrics,
  recentActivities 
} from './data/mockData';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 헤더 */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                개발 분석 대시보드
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                개발 지표 및 성과 분석
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                마지막 업데이트: {new Date().toLocaleString('ko-KR')}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 주요 지표 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="총 커밋 수"
            value={productivityMetrics.totalCommits.toLocaleString()}
            change={12.5}
            changeType="increase"
            icon={GitCommit}
            description="이번 달 커밋 수"
          />
          <MetricCard
            title="총 코드 라인"
            value={productivityMetrics.totalLinesOfCode.toLocaleString()}
            change={8.3}
            changeType="increase"
            icon={Code}
            description="전체 프로젝트 코드 라인 수"
          />
          <MetricCard
            title="일평균 커밋"
            value={productivityMetrics.averageDailyCommits}
            change={-2.1}
            changeType="decrease"
            icon={TrendingUp}
            description="최근 30일 평균"
          />
          <MetricCard
            title="테스트 커버리지"
            value={`${productivityMetrics.testCoverage}%`}
            change={5.2}
            changeType="increase"
            icon={Activity}
            description="코드 테스트 커버리지"
          />
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 일별 커밋 차트 */}
          <ChartCard title="일별 커밋 활동">
            <LineChart 
              data={commitData} 
              dataKey="commits" 
              name="커밋 수"
              color="#3B82F6"
            />
          </ChartCard>

          {/* 주간 코드 라인 수 차트 */}
          <ChartCard title="주간 코드 작성량">
            <BarChart 
              data={codeLinesData} 
              dataKey="lines" 
              name="코드 라인 수"
              color="#10B981"
            />
          </ChartCard>

          {/* 프로젝트별 작업 시간 */}
          <ChartCard title="프로젝트별 작업 시간">
            <PieChart 
              data={projectTimeData} 
              dataKey="hours" 
              nameKey="name"
            />
          </ChartCard>

          {/* 월별 버그 수정 */}
          <ChartCard title="월별 버그 수정 현황">
            <LineChart 
              data={bugFixData} 
              dataKey="bugs" 
              name="버그 수"
              color="#EF4444"
            />
          </ChartCard>
        </div>

        {/* 기술 스택 및 최근 활동 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 기술 스택 사용률 */}
          <ChartCard title="기술 스택 사용률">
            <PieChart 
              data={techStackData} 
              dataKey="percentage" 
              nameKey="name"
            />
          </ChartCard>

          {/* 최근 활동 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              최근 활동
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      {activity.type === 'commit' && <GitCommit className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'pull_request' && <Code className="w-4 h-4 text-green-600" />}
                      {activity.type === 'deployment' && <Activity className="w-4 h-4 text-purple-600" />}
                      {activity.type === 'bug_fix' && <Bug className="w-4 h-4 text-red-600" />}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.author} • {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 추가 지표들 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="배포 빈도"
            value={`${productivityMetrics.deploymentFrequency}/주`}
            change={15.2}
            changeType="increase"
            icon={BarChart3}
            description="주당 배포 횟수"
          />
          <MetricCard
            title="평균 리드 타임"
            value={`${productivityMetrics.leadTime}일`}
            change={-8.7}
            changeType="decrease"
            icon={Clock}
            description="코드 커밋부터 배포까지"
          />
          <MetricCard
            title="평균 복구 시간"
            value={`${productivityMetrics.mttr}시간`}
            change={-12.3}
            changeType="decrease"
            icon={Bug}
            description="장애 발생 시 복구 시간"
          />
        </div>
      </main>
    </div>
  );
}
