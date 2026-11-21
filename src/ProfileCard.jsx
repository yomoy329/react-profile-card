import React from 'react';

// 社員のプロフィール情報
const profiles = [
  { name: '侍健太', age: 37, bio: 'プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。' },
  { name: '刀沢彩香', age: 32, bio: 'フルスタックエンジニア。新規サービスの設計から運用まで担当しています。' },
  { name: '戦国広志', age: 24, bio: '若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。' },
  { name: '武士山美咲', age: 27, bio: 'UI/UXデザイナー。使いやすく美しいデザインを追求しています。' },
  { name: '武者小路勇気', age: 29, bio: 'フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。' }
];

// 章ごとのUUID（起動時に1度だけ生成される）
const profilesKeys = profiles.map(() => crypto.randomUUID());

export function ProfileCard({ progress, setProgress }) {
  // 今のインデックスのプロフィールを取り出し、3つの変数に分ける
  const { name, age, bio } = profiles[progress];

  // 進捗を1進める関数
  const handleProgress = () => {
    if (progress < 4) {
      setProgress(progress + 1); // 現在のprogressに1を加算
    }
    else {
      setProgress(0);
    }
  };
  return (
    <main>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px'
        }}
        >
          <h1>{name}</h1>
        <ul>
          <li>【年齢】{age}</li>
          <li>【自己紹介】{bio}</li>
        </ul>
      </div>
      <section>
        <button onClick={handleProgress}>次のプロフィール</button>
      </section>
    </main>
  );
}