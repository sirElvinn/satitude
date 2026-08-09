import { BookOpen } from 'lucide-react'
import ComingSoon from '../../components/ComingSoon'

export default function PracticeTest() {
  return (
    <ComingSoon
      icon={BookOpen}
      title="Practice Tests"
      description="Full-length Bluebook-style practice exams are being built. Soon you'll be able to take adaptive, timed tests that mirror the real digital SAT."
    />
  )
}
