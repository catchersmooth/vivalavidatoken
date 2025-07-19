import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="mb-4">
        <a href="https://github.com/your-repo/vivalavida" className="inline-flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-200">
          <FaGithub /> <span>vivalavida on GitHub</span>
        </a>
      </div>
      © {new Date().getFullYear()} VIVALAVIDA. All rights reserved.
    </footer>
  );
}