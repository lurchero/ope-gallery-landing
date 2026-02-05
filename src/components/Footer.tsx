export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-800 pt-20 pb-12 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold text-secondary">OPE Gallery</p>
            <p className="mt-2 text-sm text-neutral-400">
              Art, culture, and community—rooted in Only Positive Energy.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Follow
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="https://instagram.com/opegallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-200 hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@opegallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-200 hover:text-accent transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://x.com/opegllery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-200 hover:text-accent transition-colors"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Connect
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="#updates"
                className="text-sm text-neutral-200 hover:text-accent transition-colors"
              >
                Join the List
              </a>
              <a
                href="#contact"
                className="text-sm text-neutral-200 hover:text-accent transition-colors"
              >
                Inquire / Collaborate
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-400">
            &copy; 2025 OPE Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
