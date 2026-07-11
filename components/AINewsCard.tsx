type NewsItem = {
  title: string;
  summary: string;
};

interface Props {
  news: NewsItem;
}

export default function AINewsCard({ news }: Props) {
  return (
    <div className="rounded-xl border border-gray-700 p-4 mb-3 bg-gray-900">
      <h3 className="font-bold text-white">
        {news.title}
      </h3>

      <p className="text-gray-400 mt-2">
        {news.summary}
      </p>
    </div>
  );
}

