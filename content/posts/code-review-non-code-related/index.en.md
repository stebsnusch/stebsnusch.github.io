---
title: "Everything non-code-related I learned while writing guidelines about Code Reviews"
date: "2020-10-30"
draft: false
description: Um pouco do meu processo de aprendizado fora do campo técnico
categories: ["carreira"]
tags: ["code reviews", "soft skills"]
draft: false
cover:
  image: "images/image-1.jpeg"
---

![Illustration of a person surrounded by speech bubbles](images/image-1.jpeg)

Ever since I became a part of the team at QuintoAndar, I was introduced to many processes I was not familiar with. One of those was mandatory code reviews.

In short, code reviewing is reading through another person's code and commenting whether you think there's a better way of solving a problem, giving some tips, and even complimenting their solutions.

Within the company, in order to merge our code to production, we need at least one approval — and, consequently, a review — from another engineer. And we are highly encouraged by our leaders to contribute to this culture. However, I did not really know where to start and also noticed some teams used tools completely different from others. We had no standards nor spoke the same language.

After reporting it to my Tech Lead at the time, he then asked me what I'd think about doing some research in order to write better Code Review guidelines for the company. I have always been vocal about my passion for process documentation and he simply put two and two together.

## Building autonomy

Because I was told I could do it however I wanted, my creativity was allowed to work. I planned this, as I saw, micro-project of mine, splitting it into four phases:

- Taking a poll — ask what our culture is like today and what suggestions the engineering team's got in mind;
- Sharing the results — build an infographic with the company's engineers general opinions on the topic and valuable insights;
- Start writing new guidelines and receive feedback — create a temporary channel to communicate with people who are interested in contributing and reviewing it;
- Sharing the final document with the whole team!

I need to credit my former Tech Lead for the success of this process because he clearly believed in me and gave me honest feedback whenever I asked for it. This kind of attitude just confirms a belief I had for some time: the more democratic a leadership is, the more effective. It was very clear to me from the beginning this was something he thought of because he genuinely wanted me to succeed and build this sense of belonging in the company's collaborative environment.

## Getting down to business

So I had a problem, a solution, and a clear plan to execute. Time to turn it into reality. The first step was coming up with key questions that could summarize a) how our team was working, b) how they felt about it, and c) how we could improve.

On the 5th of June, I sent a message on our general developer's Slack channel asking everyone to participate in the poll. Once in a while, I popped up again on the channel to remind everyone of it. And a lot of people seemed truly interested in the topic: by the poll's closing date, which was June 16, it got 73 responses. Considering we had around 200 engineers back then, I got a response rate of 36.5%, which is considered high for a company with this many people.
Round 1 — clear! Now onto the next step: compiling the responses and coming up with insights.

## Proof of Concept

![Illustration with a green background, a man and a woman with their backs turned, looking at a white arrow.](images/image-2.jpeg)

Image SourceBy the time, I was reading a book about how gender inequality intoxicated the Tech Industry. It is also worth mentioning that I got into the company through this women-only hiring program they opened, which I wrote about here. So I knew I had to confirm my hypothesis that women were not feeling secure enough to give their opinion on their peer's code. Though the form was anonymous, I cautiously asked for respondents' gender and if they felt secure during code review dynamics. From the beginning, my goal was to prove a correlation between these two data points. I didn't want to make anyone feel uncomfortable, so the options were "male", "female", "non-binary", an open field "other", and "I'd rather not answer".

Among the respondents, 49 were males, 21 females and 3 chose not to answer. The result was exactly what I expected. As a whole, 54.8% of the team said they did feel secure while reviewing other people's code. However, when filtered by gender, 81% of the women said that no, they did not feel secure doing that.

We are raised in a society that tells girls not to take risks, to be quiet, and not to confront men's convictions. How do we expect that all of a sudden, female programmers just start "pointing their fingers" onto their mostly-male-written peer's code? Hiring women is one part of inclusion, but making them feel like part of the company and stay in through the next month is a whole other story. We need to take responsibility for it and act as soon as possible. This is what I tried to prove, making use of a simple poll about code reviews.

## People are different

Talking about code reviews is talking about human communication. There is a whole background history you are completely unaware of in every person.

It can be frustrating when you spent hours, or maybe days, struggling to find the best way to solve a problem and yet another person comes out of nowhere telling you it's actually pretty simple and can be dealt with a single line of code, right?

The reviewer and the reviewee need to understand both are doing their best to help and deliver a good product. The reviewee needs to be humble about their code and understand there will always be someone — even from a lower seniority level — that knows more about a certain topic than them. In fact, it is safer to assume we will never know everything about anything. Whereas the reviewer needs to convey their perceptions about the code clearly enough, and maybe provide some suggestions. You never know how the person receiving the review will interpret what you said. We do have emojis on Markdown to add a bit of feeling to our Github comments, but it's definitely not the same as talking face to face.

Also, as mentioned before, people have each their own background history. Autistic people, for example, tend to have a really hard time interpreting sarcasm, so one should always take their comments seriously enough and understand it's documentation, after all. Everything one puts on Github or whatever version controller tool they prefer to use is their application's history and should be treated as such.

## Continuous feedback: love at first sight

![Illustration with dark blue background, 5 faces going from happier to sadder](images/image-3.png)

Image SourceThroughout my career, going from company to company, I felt that in general there was not a culture of giving coworkers constant feedback. At least I wasn't getting any. However, it's changed now for two main reasons: 1) I matured enough to understand I feel so much more motivated when I listen to what people have to say about my work and how I can improve, and 2) the company I'm in understood it as well.

After sharing the poll's results, a lot of coworkers told me how they felt about the numbers and answers. Things they didn't imagine were happening. Important questions that, for some reason, nobody's ever asked. Until that moment. I felt proud of my job. And I'm sure this was my Tech Lead's goal from the beginning as well.

I then gathered these same people that were engaged in the poll and came up with a temporary Slack channel for them to comment on the first version of the document. In something around a month, it was full of comments. From grammar correction to extensive considerations about Clean Code, these people helped me reach my goal.
I became a better writer, a better developer, and a better code reviewer! And what I want other engineers from the company to take from the guidelines I wrote is the same — maybe not the "writer" part.

## Main takeaways

I spent around four months building a document that hopefully will improve the way we share technical knowledge within the company and had a lot of fun while doing it. I saw how beneficial it is to not only say you want your team to feel like part of a whole but demonstrate it with actions. Female Tech Leads also scheduled meetings with all the girls from tech and started new initiatives to decrease the gender inequality we still have inside the company.

When you allow someone to be creative, you're telling them you trust their judgment. You acknowledge them and create an autonomous team that considers it challenging to tackle an obstacle.

Reviewing code is about learning and teaching. It's about communication and feedback. At the end of the day, we're human beings and want to feel validated. We want to be told we are doing a good job and be recognized for it, or sometimes we just want someone to help. "Code review", this technical topic, is far more nuanced than one might think at first sight. It is crucial that we consider how our unconscious biases influence minimal everyday tasks and how we can start building a psychologically safe environment.

I remember back in college when we had grammar classes and some of my colleagues would argue about how it had nothing to do with system development. Back then, I could've agreed, but as I've always been in love with writing — before considering tech, I wanted to be a journalist -, it did not bother me as much. The tables have turned, however, and these soft skills, such as communication and empathy, are being more and more vital for programmers, just like having a good understanding of your favorite programming language.
