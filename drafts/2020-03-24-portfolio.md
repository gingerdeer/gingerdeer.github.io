---
title: "Quadratic programming in Python: portfolio optimization"
last_modified_at:
tags:
author: pena
hidden: true
---

A fun topic somewhere in between Finance, Optimization and Mathematics is the classical Markowitz theory of portfolio optimization, also known as the mean-variance model. Let's dive right in to see what it's all about.

# Introduction

We'll build the scenario with all the necessary definitions, and then move right into implementing the math using Python.

The scenario is as follows. There are N total stocks, each with their own price p_i. We wish to build a portfolio consisting of held amounts of each stock, such that the (expected) return on investment at the end of a set investment period is maximized.
Denote:
* $$X$$ is our portfolio vector
* $$t$$ is the end of our investment period
* $$p_i$$ is the price of asset number i at time 0
* $$p_i'$$ is the (expected) price of asset number i at time $$t$$ - this is a random variable
* The rate of return on asset number i is denoted $$r_i = \frac{p_i'-p_i}{p_i}  $$
* The ratio $$R_i = p_i'/p_i$$ is alled the return on asset i.
* Denote by $R$ the vector of returns
* Let C be the covariance matrix of R

For simplicity, let's set our total budget as one. The portfolio is thus a vector X such that 

$$ \Sum X = 1 $$.

The expected return is defined as $$ X^TR $$, being the sum of held amounts of each asset multiplied by their return. The risk associated with a portfolio is defined through the covariance as $$ X^TCX $$.

The problem at hand can be formulated as minimizing the risk, subject to a minimum expected return. Alternatively and equivalently, one can formulate it as maximizing the profit, subject to a set level of risk.

This leads to what is called a Quadratic Programming (QP) problem. It is a particular special case of Convex Programming (CP), and there are *numerous* tools out there for solving problems such as this. They rely on the mathematics of Convex Optimization, certainly a fun area to dive into. For our practical purposes here, it is enough to know that the convexity of the problem setup implies a single optimal solution to our problem for any particular input. 

# Implementation

# Disclaimer

This is an overview of the Markowitz portfolio algorithm, nothing else. Do not throw money on any investment strategy just because of some fool on the internets.

# Further reading

[MathWorks](https://se.mathworks.com/help/finance/portfolio-optimization-theory-mv.html)
[MathWorks example](https://se.mathworks.com/help/optim/ug/quadratic-programming-portfolio-optimization.html)
[MOSEK Portfolio Optimization Cookbook](https://docs.mosek.com/portfolio-cookbook/markowitz.html)
[Wikipedia](https://en.wikipedia.org/wiki/Markowitz_model)

