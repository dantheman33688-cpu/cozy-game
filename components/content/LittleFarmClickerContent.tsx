'use client';

import React from 'react';
import { littleFarmClickerContent } from '@/app/little-farm-clicker/content';
import Image from 'next/image';

export const LittleFarmClickerContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      {/* 页面标题 */}
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
          {littleFarmClickerContent.metadata.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {littleFarmClickerContent.metadata.description}
        </p>
      </header>

      {/* 引言部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{littleFarmClickerContent.introduction.title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{littleFarmClickerContent.introduction.description}</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Learning Objectives:</h4>
            <ul className="text-green-700 space-y-1">
              {littleFarmClickerContent.introduction.learningObjectives.map((objective, index) => (
                <li key={index}>• {objective}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 核心玩法部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{littleFarmClickerContent.gameplay.title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{littleFarmClickerContent.gameplay.description}</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Game Loop Details:</h4>
            <ul className="space-y-2">
              {littleFarmClickerContent.gameplay.loopDetails.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-blue-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 快速开始提示部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{littleFarmClickerContent.fastStartTips.title}</h3>
          </div>
          <p className="text-gray-700">{littleFarmClickerContent.fastStartTips.description}</p>
        </div>
      </section>

      {/* 货币掌握部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{littleFarmClickerContent.currencyMastery.title}</h3>
          </div>
          
          <p className="text-gray-700 mb-6">{littleFarmClickerContent.currencyMastery.description}</p>
          
          {/* 金币用途 */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Coin Uses:</h4>
            <ul className="space-y-2 ml-4">
              {littleFarmClickerContent.currencyMastery.coinUses.map((use, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-700">{use}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 宝石部分 */}
          <div className="mb-6 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">{littleFarmClickerContent.currencyMastery.gems.title}</h4>
            <p className="text-purple-700">{littleFarmClickerContent.currencyMastery.gems.description}</p>
          </div>

          {/* 最赚钱作物 */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Most Profitable Crops:</h4>
            <ul className="space-y-2 ml-4">
              {littleFarmClickerContent.currencyMastery.mostProfitableCrops.map((crop, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{crop}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 能量和箱子 */}
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">{littleFarmClickerContent.currencyMastery.powerupsAndCrates.title}</h4>
            <p className="text-yellow-700 mb-2">{littleFarmClickerContent.currencyMastery.powerupsAndCrates.description}</p>
            <p className="text-yellow-700 font-semibold">Timing Tip: {littleFarmClickerContent.currencyMastery.powerupsAndCrates.timingTip}</p>
          </div>
        </div>
      </section>

      {/* 升级路径部分 */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">{littleFarmClickerContent.upgradePath.title}</h3>
          <p className="text-gray-600">Optimize your farm&apos;s efficiency with the right upgrade strategy</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500 transition-all duration-300 hover:shadow-xl">
          <p className="text-gray-700 mb-6">{littleFarmClickerContent.upgradePath.description}</p>
          
          {/* 自动化部分 */}
          <div className="mb-6 p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">{littleFarmClickerContent.upgradePath.automation.title}</h4>
            <p className="text-orange-700 mb-2">{littleFarmClickerContent.upgradePath.automation.description}</p>
            <p className="text-orange-700 font-semibold">Cost: {littleFarmClickerContent.upgradePath.automation.cost}</p>
          </div>

          {/* 生长速度 vs 自动化 */}
          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">{littleFarmClickerContent.upgradePath.growthSpeedVsAutomation.title}</h4>
            <p className="text-green-700 mb-2">{littleFarmClickerContent.upgradePath.growthSpeedVsAutomation.description}</p>
            <p className="text-green-700 font-semibold">Tip: {littleFarmClickerContent.upgradePath.growthSpeedVsAutomation.tip}</p>
          </div>

          {/* 完整解锁列表 */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">{littleFarmClickerContent.upgradePath.fullUnlocks.title}</h4>
            <p className="text-blue-700">{littleFarmClickerContent.upgradePath.fullUnlocks.description}</p>
          </div>
        </div>
      </section>

      {/* 常见问题部分 */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{littleFarmClickerContent.faq.title}</h3>
          </div>

          <div className="space-y-6">
            {littleFarmClickerContent.faq.questions.map((faq, index) => (
              <div key={index} className="p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer faq-item border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 结论部分 */}
      <section>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{littleFarmClickerContent.conclusion.title}</h3>
          <p className="mb-4 text-lg">{littleFarmClickerContent.conclusion.description}</p>
          <p className="font-semibold">
            Keep upgrading, unlock new plants, and automate your farm for ultimate success!
          </p>
        </div>
      </section>
    </div>
  );
};