def analyze_academic(cgpa, attendance, arrears, subjects):

    weak_subjects = []
    strengths = []

    for subject in subjects:
        name = subject["name"]
        marks = subject["marks"]

        if marks < 50:
            weak_subjects.append(name)
        elif marks >= 75:
            strengths.append(name)

    if cgpa >= 8:
        academic_status = "Excellent"
    elif cgpa >= 6.5:
        academic_status = "Good"
    elif cgpa >= 5:
        academic_status = "Needs Improvement"
    else:
        academic_status = "At Risk"

    if arrears > 0:
        arrear_status = "Active Arrear"
    else:
        arrear_status = "Cleared / No Active Arrear"

    if arrears > 2 or attendance < 60 or cgpa < 5:
        risk_level = "High"
    elif arrears > 0 or attendance < 75 or cgpa < 6.5:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "academic_status": academic_status,
        "arrear_status": arrear_status,
        "weak_subjects": weak_subjects,
        "strengths": strengths,
        "risk_level": risk_level
    }


def calculate_placement_readiness(
    technical,
    dsa,
    sql,
    aptitude,
    communication,
    projects
):

    scores = {
        "Technical Skills": technical,
        "DSA": dsa,
        "SQL": sql,
        "Aptitude": aptitude,
        "Communication": communication,
        "Projects": projects
    }

    total_score = sum(scores.values()) / len(scores)

    strengths = []
    weak_areas = []
    recommendations = []

    for skill, score in scores.items():

        if score >= 75:
            strengths.append(skill)

        elif score < 60:
            weak_areas.append(skill)

            recommendations.append(
                f"Improve your {skill} through regular practice and structured learning."
            )

    if total_score >= 75:
        readiness = "Placement Ready"
    elif total_score >= 50:
        readiness = "Needs Improvement"
    else:
        readiness = "Not Ready"

    if not recommendations:
        recommendations.append(
            "Maintain your current preparation and continue practicing regularly."
        )

    return {
        "total_score": round(total_score, 2),
        "readiness": readiness,
        "strengths": strengths,
        "weak_areas": weak_areas,
        "recommendations": recommendations
    }


def skill_gap_analysis(target_career, current_skills):

    career_skills = {
        "Software Engineer": [
            "Python",
            "Java",
            "DSA",
            "SQL",
            "Git",
            "Projects"
        ],
        "Software Developer": [
            "Python",
            "Java",
            "DSA",
            "SQL",
            "Git",
            "Projects"
        ],
        "Frontend Developer": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git"
        ],
        "Data Analyst": [
            "Python",
            "SQL",
            "Excel",
            "Power BI",
            "Statistics"
        ]
    }

    required_skills = career_skills.get(target_career, [])

    missing_skills = []

    for skill in required_skills:
        if skill.lower() not in [s.lower() for s in current_skills]:
            missing_skills.append(skill)

    return {
        "target_career": target_career,
        "required_skills": required_skills,
        "skill_gaps": missing_skills
    }


def generate_recommendations(arrears, weak_subjects, skill_gaps):

    recommendations = []

    if arrears > 0:
        recommendations.append(
            "You have active arrears. Prioritize clearing them first."
        )

        if weak_subjects:
            recommendations.append(
                "Priority subjects: " + ", ".join(weak_subjects)
            )

            recommendations.append(
                "Create a weekly study plan and practice weak subjects regularly."
            )

    if skill_gaps:
        recommendations.append(
            "Focus on developing these missing skills: " +
            ", ".join(skill_gaps)
        )

    if not recommendations:
        recommendations.append(
            "You are progressing well. Continue practicing consistently."
        )

    return recommendations


def generate_training_plan(skill_gaps):

    training_plan = []

    for skill in skill_gaps:

        if skill == "DSA":
            training_plan.append({
                "skill": "DSA",
                "recommendation": "Practice arrays, strings, linked lists and basic problem solving."
            })

        elif skill == "SQL":
            training_plan.append({
                "skill": "SQL",
                "recommendation": "Learn SELECT, JOIN, GROUP BY and practice SQL queries."
            })

        elif skill == "Git":
            training_plan.append({
                "skill": "Git",
                "recommendation": "Learn Git basics, commits, branches and GitHub."
            })

        elif skill == "Projects":
            training_plan.append({
                "skill": "Projects",
                "recommendation": "Build at least one practical project and upload it to GitHub."
            })

        else:
            training_plan.append({
                "skill": skill,
                "recommendation": "Practice and improve this skill through structured learning."
            })

    return training_plan


def generate_career_recommendations(readiness, target_career):

    recommendations = []

    if readiness == "Placement Ready":
        recommendations.append(target_career)
        recommendations.append("Junior Developer")
        recommendations.append("Software Developer")

    elif readiness == "Needs Improvement":
        recommendations.append("Internship")
        recommendations.append("Junior Developer")
        recommendations.append("Training and Skill Development")

    else:
        recommendations.append("Skill Development Program")
        recommendations.append("Internship Preparation")

    return recommendations