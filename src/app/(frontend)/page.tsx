'use client';

import config from '@/payload.config';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const handleClick = () => {
    alert('Hello guest 👋');
  };

  return (
    <div>
      <h2 className="pt-10 text-center text-2xl text-blue-500">Home page</h2>
      <hr />
      {/* Кнопка */}
      <div className="flex justify-center pt-10">
        <Button onClick={handleClick} variant="secondary">
          Click me
        </Button>
      </div>
    </div>
  );
}
