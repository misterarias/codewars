ARG JDK_VERSION=8
ARG GRADLE_VERSION=4.10

FROM "gradle:${GRADLE_VERSION}-jdk${JDK_VERSION}-alpine"

RUN mkdir project
WORKDIR project

COPY settings.gradle .
COPY src src
COPY vars vars
COPY test test
COPY build.gradle .

ENV GRADLE_OPTS "-Dorg.gradle.daemon=false"
RUN gradle build

CMD ["gradle", "cucumber"]
