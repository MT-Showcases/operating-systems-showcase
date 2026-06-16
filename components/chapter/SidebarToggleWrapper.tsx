'use client';

import ChapterSidebar from '@/components/chapter/ChapterSidebar';

interface SidebarToggleWrapperProps {
  currentSlug: string;
  sections: Array<{ id: string; title: string }>;
}

export default function SidebarToggleWrapper({ currentSlug, sections }: SidebarToggleWrapperProps) {
  return <ChapterSidebar currentSlug={currentSlug} sections={sections} />;
}
