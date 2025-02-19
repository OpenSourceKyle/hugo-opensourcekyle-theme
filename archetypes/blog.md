---
title: "{{ replace (substr .Name 11) "-" " " | title }}"
date: {{ .Date }} # Filename format: YYYY-MM-DD-title.md
---

Write your content here... 