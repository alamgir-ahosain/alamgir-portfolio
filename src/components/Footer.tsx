import { Globe, PenSquare } from "lucide-react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col items-center justify-center gap-4 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-syntax-comment"></span>© {new Date().getFullYear()}{" "}{profile.name} 
          {/* <span className="text-syntax-keyword">React</span> +{" "} */}
          {/* <span className="text-syntax-fn">TanStack</span> */}
        </p>
        {/* <div className="flex items-center gap-3 text-muted-foreground">
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.social.website} target="_blank" rel="noreferrer" aria-label="Personal website" className="hover:text-foreground">
            <Globe className="h-4 w-4" />
          </a>
          <a href={profile.social.medium} target="_blank" rel="noreferrer" aria-label="Medium" className="hover:text-foreground">
            <PenSquare className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div> */
        }
      </div>
    </footer>
  );
}
