export default function Form() {
  return (
    <form name="contact" method="POST" class="space-y-6" netlify data-netlify="true">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="px-3 py-2 bg-white dark:bg-slate-900/40 border  border-slate-300 dark:border-slate-600 placeholder-gray-400 disabled:bg-white disabled:text-gray-500 dark:text-gray-200 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:bg-transparent focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none peer"
          placeholder="you@example.com" 
        />
        <p class="mt-2 hidden peer-invalid:block text-pink-500 text-sm">
          Please provide a valid email address.
        </p>
        
      </div>
      <div>
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          class="px-3 py-2 bg-white dark:bg-slate-900/40 border border-slate-300 dark:border-slate-600 placeholder-gray-400 disabled:bg-white disabled:text-gray-500 dark:text-gray-200 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:bg-transparent focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
          placeholder="Let me know how I can help you"
        />
        <p class="mt-2 peer-[.subject]:has-[:focus]:block hidden text-pink-500 text-sm">
          Please provide a valid email address.
        </p>
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          class="px-3 py-2 bg-white dark:bg-slate-900/40 border  border-slate-300 dark:border-slate-600 placeholder-gray-400 disabled:bg-white disabled:text-gray-500 dark:text-gray-200 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:bg-transparent focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none resize-none"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-slate-700 sm:w-fit hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 transition-colors duration-1000 ease-in-out"
      >
        Send message
      </button>
    </form>
  );
}
