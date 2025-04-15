"use client";

import * as React from "react";

import RepositoryCard from "./components/repository-card";
import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";

export default function StarterKitsPage(data: GithubOrganizationRepositories) {
  const filteredRepositories = data.organization.repositories.nodes.filter(
    (repo) =>
      repo.topics.nodes.some((node) =>
        node.topic.name.toLowerCase().includes("starter-kit")
      )
  );

  return (
    <div>
      <PageHeader
        title="Starter Kits"
        description="Browse a selection of fully built starter kits designed to kickstart your projects.
      "
        className="mb-8"
      />

      <Section id="boilerplates">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {filteredRepositories.map((data) => (
            <li key={data.id}>
              <article>
                <RepositoryCard {...data} />
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
